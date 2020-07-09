
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE "restaurants" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL,
    "description" TEXT NOT NULL,
    "image" text NOT NULL,
    "website" VARCHAR (1000) NOT NULL
);
CREATE TABLE "professionalServices" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL,
    "description" TEXT NOT NULL,
    "image" text NOT NULL,
    "website" VARCHAR (1000) NOT NULL
);
CREATE TABLE "marketing and consulting" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL,
    "description" TEXT NOT NULL,
    "image" text NOT NULL,
    "website" VARCHAR (1000) NOT NULL
);

CREATE TABLE "cosmetology" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL,
    "description" TEXT NOT NULL,
    "image" text NOT NULL,
    "website" VARCHAR (1000) NOT NULL
);

CREATE TABLE "retail" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL,
    "description" TEXT NOT NULL,
    "image" text NOT NULL,
    "website" VARCHAR (1000) NOT NULL
);
CREATE TABLE "miscellaneous" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL,
    "description" TEXT NOT NULL,
    "image" text NOT NULL,
    "website" VARCHAR (1000) NOT NULL
);
CREATE TABLE "wellness" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL,
    "description" TEXT NOT NULL,
    "image" text NOT NULL,
    "website" VARCHAR (1000) NOT NULL
);
CREATE TABLE "health" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL,
    "description" TEXT NOT NULL,
    "image" text NOT NULL,
    "website" VARCHAR (1000) NOT NULL
);
CREATE TABLE "arts" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL,
    "description" TEXT NOT NULL,
    "image" text NOT NULL,
    "website" VARCHAR (1000) NOT NULL
);

INSERT INTO restaurants (name, description, website, image) VALUES
('Afro Deli & Grill', 'has locations in Minneapolis, St. Paul, and both skyways, so you’re bound to find one near you. It is guaranteed to light up your tastebuds with a combo of African, Mediterranean, and American food. It’s fast-casual, socially responsible, and perfect for a quick lunch stop.', 'images/afrodeli.jpeg', 6);
INSERT INTO restaurants (name, description, website, image) VALUES
('Soul Bowl', 'the brainchild of Gerard and Britney Klass, offers a new way to do soul food. Patrons can customize their bowls with reinvented, but classic flavors and textures.' , 'https://www.soulbowlmn.com/', 'public/Images/66023sOULBOWL_logo3.png'),
INSERT INTO restaurants (name, description, website, image) VALUES
('Sammy’s Avenue Eatery', 'offers a relaxing environment to enjoy a sandwich and coffee,this neighborhood cafe has everything from breakfast sandwiches to Sammy’s homemade soup of the day.', 'http://www.sammysavenueeatery.com/','images/public/Images/download.png'),
INSERT INTO restaurants (name, description, website, image) VALUES
('Trio Plant-Based', 'is a Black-owned plant-based restaurant in Minneapolis. Trio creates unique dishes such as the “Mac Attack” burger, a Beyond burger topped with mac & cheeze and crushed potato chips, and the “BBQ jackfruit” wrap filled with southern coleslaw, pepper jack cheese and cilantro aioli. And they are open for takeout.', 'https://www.trioplantbased.com/', 'public/download.jpg'),
INSERT INTO restaurants (name, description, website, image) VALUES
('Pimento Jamaican Kitchen', 'is ground central for Dont Worry Be Happy. Tomme Beevas and partner Yoni Reinharz know how to bring the braised meats and the hot heats. Try the Coco sandwich with jerk chicken on a Jamaican milk bun. Sauce it big, with a Kingston Kick level of heat.', 'https://pimentokitchen.com/', 'public/Images/1374081859_pimento_distress.png'),
INSERT INTO restaurants (name, description, website, image) VALUES
('Mama Sheila’s', 'serves up savory soul food in a beautiful space filled with portraits of Prince, Aretha Franklin, Mama Sheila herself, and countless other Black celebrities.','https://www.mamasheilashos.com/', 'public/Images/download-1.jpg');
INSERT INTO restaurants (name, description, website, image) VALUES
('Golden Thyme Coffee & Cafe', 'co-owned by Stephanie and Mychael Wright is a long-standing gathering space in Saint Paul. While the space isnt currently hosting crowds, stop by and grab a drink and snack to-go. They have bagels, cakes, and specialty drinks named after favorite jazz musicians like Billie Holiday and Duke Ellington.','https://www.goldenthymeonselby.com/','https://images.squarespace-cdn.com/content/51622b27e4b058e82d89db6e/1425224697795-C51V5YX4L58ESRR5J2S5/logo.jpg?content-type=image%2Fjpeg');
INSERT INTO restaurants (name, description, website, image) VALUES
('El Norte Kitchen', 'is a pop-up restaurant owned by Ben, Tricia, and Elijah Allen. Inspired by their travels in Tucson, this family-owned business brings a twist to classic Southwest dishes, including breakfast tacos, and the no-longer available (but widely adored) Concha Burger.','http://elnortekitchen.com/#home','http://elnortekitchen.com/wp-content/uploads/2019/06/EL_NORTE_ORIGINAL.png');
INSERT INTO restaurants (name, description, website, image) VALUES
('Angelea’s Soul Food Kitchen', 'is run by the Rogers family, inspired by their mother Angelea Rogers, who passed away in 2017. Their soul food comes in heaping portions, with delicious jerk chicken, mac’n’cheese, yams, and more to feast on.','https://www.angeleassoulfoodkitchen.com/','https://images.squarespace-cdn.com/content/5e2a916ecd08830d90a67252/1580160812724-HW0HEQJSCNS6DCEOKW7G/Angeleas_SFK_logo-01.png?format=1500w&content-type=image%2Fpng');
INSERT INTO restaurants (name, description, website, image) VALUES
('Thigh Times Birdhouse', 'from Jared and Jenn Brewington, formerly of Funky Grits, centers around chicken in various forms: wribs, tenders, and sandwiches. Thigh Times’ pop-up residency at The Freehouse was recently extended, with Wednesdays, Fridays and Saturdays featuring big papa jumbo wings.','https://www.thightimesbirdhouse.com','https://northloopgalley.org/wp-content/uploads/logo_thightimes.png');
INSERT INTO "professionalServices" (name, description, website, image) VALUES
('The Good Pet Groomer', 'does full service grooms and de-sheds for dogs of all shapes and sizes at their Franklin Ave location.','https://www.facebook.com/thegoodpetgroomer/','https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-9/10314701_671697439626199_6264700384087887910_n.jpg?_nc_cat=110&_nc_sid=6e5ad9&_nc_ohc=YBhizwMHO3kAX83qdt0&_nc_ht=scontent-msp1-1.xx&oh=166de795c621d264f6a8affca6507b76&oe=5F2AE996');
INSERT INTO "professionalServices" (name, description, website, image) VALUES
('AirRiffic', 'performs air duct and dryer vent cleaning, fireplace chimney cleaning, inspection and repairs, residential/commercial sanitizing and disinfecting, and more.','https://www.airriffic.com/','https://static.wixstatic.com/media/87a228_14634dfa39324c8ca72e8eaa154ed469~mv2_d_3224_1209_s_2.png/v1/fill/w_1536,h_576,al_c,q_90,usm_2.00_1.00_0.00/Color%20logo%20-%20no%20background.webp');
INSERT INTO "professionalServices" (name, description, website, image) VALUES
('This Love Weddings', 'owned by Faith Folayan is a full service wedding planning and design boutique that will help you create the perfect weekend celebration of your love.','http://thisloveweddings.com/http://thisloveweddings.com/','wp-content/themes/thisloveweddings/img/logo.png');
INSERT INTO "professionalServices" (name, description, website, image) VALUES
('Events by MV', 'is the work of Adrian Perryman. Known as DJMV he will provide his professional DJ services and tailor the tunes to your night.','https://www.eventsbymv.com/','https://www.eventsbymv.com/wp-content/uploads/2017/06/events-by-MV-logo-official-2014-stroke-large.png');
INSERT INTO "professionalServices" (name, description, website, image) VALUES
('The Oxygen Plan', 'is the brainchild of Eric Lucas, in collaboration with Mayo Clinic. The program help users identify and address sources of stress in their life via mobile app.','http://theoxygenplan.com/','http://theoxygenplan.com/wp-content/uploads/2015/07/logo_new_large2.jpg');
INSERT INTO "professionalServices" (name, description, website, image) VALUES
('Wolfpack Promotionals', 'specializes in high-quality personalized promotional printing strategic marketing and corporate branding. Wolfpack also sells its own line of Alpha Wear apparel.','https://www.wolfpackpromotionals.com/','https://static.wixstatic.com/media/4d8045_7e41988785194b0eb0442a6ad38617f3.png/v1/fill/w_358,h_358,al_c,q_85,usm_0.66_1.00_0.01/4d8045_7e41988785194b0eb0442a6ad38617f3.webp');
INSERT INTO "marketing and consulting" (name, description, website, image) VALUES
('Monicat Data', 'specializes in technology support and research consulting for creative companies, so they can spend more time executing and less time planning.','https://www.monicatdata.com/','https://images.squarespace-cdn.com/content/5ec2bb4c982e2715b9f30e74/1591983186051-G3AILY2927ITJYSQPBOB/6.png?content-type=image%2Fpng');
INSERT INTO "marketing and consulting" (name, description, website, image) VALUES
('Schoolz','develops culturally relevant and representative classroom content so educators can better engage their students.','https://schoolz.com/','https://schoolz.com/wp-content/uploads/2020/02/Schoolz@2x.png');
INSERT INTO "marketing and consulting" (name, description, website, image) VALUES
('Youth Lens 360',' is a digital strategy, digital marketing, and digital management agency specializing in developing content that will connect with youthful audiences.','https://www.youthlens360.com/','https://images.squarespace-cdn.com/content/5e90bc27975ecb61e375c93f/1587398025145-SS95NR6OVL9Y3Z993WWN/Corner+Logo.png?format=1500w&content-type=image%2Fpng');


CREATE TABLE "favorites"(
  "id" SERIAL PRIMARY KEY,
  "user_id" INT REFERENCES "user",
  "restaurant_id" INT REFERENCES "restaurants",
  "cosmetology_id" INT REFERENCES "cosmetology",
  "arts_id" INT REFERENCES "arts",
  "health_id" INT REFERENCES "health",
  "wellness_id" INT REFERENCES "wellness",
  "retail_id" INT REFERENCES "retail",
  "profesionalServices_id" INT REFERENCES "professionalServices",
  "marketing and consulting_id" INT REFERENCES "marketing and consulting",
  "miscellaneous_id" INT REFERENCES "miscellaneous",
  "visited" boolean default false
);
