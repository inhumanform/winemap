"""empty message

Revision ID: f5709dec81a4
Revises: 
Create Date: 2024-05-02 11:05:04.553567

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f5709dec81a4'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('grapes', schema=None) as batch_op:
        batch_op.add_column(sa.Column('image', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('grapes', schema=None) as batch_op:
        batch_op.drop_column('image')

    # ### end Alembic commands ###
