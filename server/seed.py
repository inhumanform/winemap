from models import db, Grapes, ParentRegions, SubRegions, User
from app import app

if __name__ == '__main__':


    with app.app_context():
        print("Building Database...")

        db.create_all()

        Grapes.query.delete()
        ParentRegions.query.delete()
        SubRegions.query.delete()
        User.query.delete()

        grape1 = Grapes(name="Cabernet Sauvignon", color= 'Red')




        pr1 = ParentRegions(name="California", country='USA'),
        pr2 = ParentRegions(name="Oregon", country='USA'), 
        pr3 = ParentRegions(name= "New York", country= 'USA'),
        pr4 = ParentRegions(name= "Virginia", country= 'USA'),

        sr1 = SubRegions(name = "Napa Valley", parent_region_id = pr1, climate = "dry Mediterranean",  )




        u1 = User(first_name = 'Drew', last_name = 'Hairston', username = 'dch528', password = '771532Drew!', email_address= 'dch528@gmail.com', admin= True)

        u2 = User(first_name = 'John', last_name = 'Doe', username = 'tester', password = 'test123!', email_address= 'test@test.com', admin= False)
