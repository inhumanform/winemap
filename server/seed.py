from models import db, Grapes, ParentRegions, SubRegions, User, grapes_subregions
from app import app

if __name__ == '__main__':
    with app.app_context():
        print("Building Database...")

        db.create_all()

        # Clear existing data
        db.session.query(Grapes).delete()
        db.session.query(ParentRegions).delete()
        db.session.query(SubRegions).delete()
        db.session.query(User).delete()

        g1 = Grapes(name="Cabernet Sauvignon", color='Red')
        g2 = Grapes(name="Chardonnay", color='White')
        g3 = Grapes(name="Riesling", color='White')
        g4 = Grapes(name="Pinot Noir", color='Red')
        g5 = Grapes(name="Sauvignon Blanc", color='White')
        g6 = Grapes(name="Rkatsiteli", color='White')

        pr1 = ParentRegions(name="California", country='USA')
        pr2 = ParentRegions(name="Oregon", country='USA')  # Removed trailing comma
        pr3 = ParentRegions(name="New York", country='USA')  # Removed trailing comma
        pr4 = ParentRegions(name="Virginia", country='USA')
        pr5 = ParentRegions(name="Washington", country='USA')

        sr1 = SubRegions(name="Napa Valley", climate="Mediterranean")
        sr2 = SubRegions(name="Finger Lakes", climate="Continental")
        sr3 = SubRegions(name="Willamette Valley", climate="Maritime")
        sr4 = SubRegions(name="Sonoma County", climate="Mediterranean")
        sr5 = SubRegions(name="Monticello", climate="Subtropical/Maritime")
        sr6 = SubRegions(name="Central Coast", climate="Mediterranean")
        sr7 = SubRegions(name="Wahluke Slope", climate="Dry & Warm")

        g1.subregions.extend([sr1, sr4, sr6])
        g2.subregions.extend([sr1, sr2, sr3, sr4, sr5, sr6, sr7])
        g3.subregions.append(sr2)
        g4.subregions.extend([sr1, sr2, sr3, sr4, sr6, sr7])
        g5.subregions.extend([sr1, sr6, sr5])  # sr6 is repeated, is this intentional?
        g6.subregions.extend([sr2, sr7])

        # Associate SubRegions with ParentRegions
        sr1.parent_regions = pr1
        sr2.parent_regions = pr3
        sr3.parent_regions = pr2
        sr4.parent_regions = pr1
        sr5.parent_regions = pr4
        sr6.parent_regions = pr1
        sr7.parent_regions = pr5

        u1 = User(first_name='Drew', last_name='Hairston', username='dch528', password='771532Drew!',
                  email_address='dch528@gmail.com', admin=True)

        u2 = User(first_name='John', last_name='Doe', username='tester', password='test123!',
                  email_address='test@test.com', admin=False)

        db.session.add_all([g1, g2, g3, g4, g5, g6, pr1, pr2, pr3, pr4, pr5, sr1, sr2, sr3, sr4, sr5, sr6, sr7, u1, u2])
        db.session.commit()