from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy_serializer import SerializerMixin
# from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_method
from sqlalchemy.ext.hybrid import hybrid_property
# from flask_bcrypt import Bcrypt

from config import db, bcrypt


metadata = MetaData(
    naming_convention={
        "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    }
)

db = SQLAlchemy(metadata=metadata)


# Models go here!

grapes_subregions = db.Table(
    'grapes_subregions',
    metadata,
    db.Column('grape_id', db.Integer, db. ForeignKey(
        'grapes.id'), primary_key=True),
    db.Column('subregions_id', db.Integer, db.ForeignKey(
        'subregions.id'), primary_key=True)
)
parentregion_subregions = db.Table(
    'parentregion_subregions',
    metadata,
    db.Column('parentregions_id', db.Integer, db. ForeignKey(
        'parent_regions.id'), primary_key=True),
    db.Column('subregions_id', db.Integer, db.ForeignKey(
        'subregions.id'), primary_key=True)
)

class Grapes(db.Model, SerializerMixin):
    __tablename__ = 'grapes'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False, unique=True)
    color = db.Column(db.String, nullable=False)
    image = db.Column(db.String)

    subregions = db.Relationship(
        'SubRegions', secondary=grapes_subregions, back_populates='grapes'
    )

    serialize_rules = ('-subregions.grapes', )

# Grapes and SubRegions Many-to-Many relationship: The grapes exist in many subregions
    # subregions_id = association_proxy('subregions', 'grapes', creator = lambda c: Grapes(subregion_id = c))
    


class ParentRegions(db.Model, SerializerMixin):
    __tablename__ = 'parent_regions'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    abbreviation = db.Column(db.String, nullable=False)
    country = db.Column(db.String, nullable=False)
    # subregions = db.relationship('SubRegions', back_populates='parent_regions', cascade='all')
    subregions = db.Relationship(
        'SubRegions', secondary=parentregion_subregions, back_populates='parent_regions'
    )
    serialize_rules = ('-subregions.parent_regions', )
   
    


 # 1 Parent Region has many sub regions, 1 to many
    # subregions_id = db.relationship('SubRegions', back_populates='parent_regions', cascade='all')


class SubRegions(db.Model, SerializerMixin):
    __tablename__ = 'subregions'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False, unique=True)
    # grapes_id = db.Column(db.Integer)
    # parent_region_id = db.Column(db.Integer, db.ForeignKey('parent_regions.id'))
    climate = db.Column(db.String)

    # parent_regions = db.relationship('ParentRegions', back_populates='subregions')
    parent_regions = db.Relationship(
        'ParentRegions', secondary=parentregion_subregions, back_populates='subregions'
    )
    
    grapes = db.relationship(
        'Grapes', secondary=grapes_subregions, back_populates='subregions'
    )

    serialize_rules = ('-grapes.subregions', '-parent_regions.subregions', )
    
    
class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    username = db.Column(db.String, nullable=False, unique=True)
    _password_hash = db.Column(db.String, nullable=False)
    email_address = db.Column(db.String, nullable=False, unique=True)
    admin = db.Column(db.Boolean, default=False)


    @hybrid_property
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))
    

    @validates('email_address')
    def validate_email(self, attr, email):
        if '@' not in email:
            raise ValueError("Please enter a valid email address")
        return email
    
    @validates('first_name', 'last_name')
    def validate_columns(self, attr, value):
        if (not isinstance(value, str)) or len(value) < 2:
            raise ValueError(f"{attr} must be at least 2 characters long!")
        return value
    
    @validates('username')
    def validate_username(self, attr, value):
        if (not isinstance(value, str)) or len(value) < 3:
            raise ValueError(f"{attr} must be at least 3 characters long!")
        return value
    
    @validates('password')
    def validate_password(self, attr, value):
        if (not isinstance(value, str)) or len(value) < 7:
            raise ValueError(f"{attr} must contain a special character and be at least 7 characters long!")
        elif not any(char in value for char in '!@#$%^&*_'):
            raise ValueError(f'{attr} must contain a special character!')
        return value
