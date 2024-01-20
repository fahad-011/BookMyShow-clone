# 209231102321023-07

## Book My Show Clone
    >> React
    >> Tailwind
    >> React-Slick (Carousels)
    >> React-Icons
    >> React-Context-API


#        Pages:                                 HOCs (Layouts):
    >> Home.Page.jsx                            Default.layout.jsx
    >> Movie.Page.jsx                           Movie.layout.jsx
    >> Play.Page.jsx                            Default.layout.jsx

# Components:
    >> Cast                             Cast.Component.jsx
    >> Entertainment                    EntertainmentCard.Component.jsx
    >> HeroCarousel                     HeroCarousel.Component.jsx
                                        Arrows.Component.jsx
    >> MovieHero                        MovieHero.Component.jsx
                                        MovieInfo.Component.jsx
    >> Navbar                           MovieNavbar.Component.jsx
                                        Navbar.Component.jsx
    >> PaymentModel                     Payment.Component.jsx             
    >> PlayFilters                      PlayFilters.Component.jsx
    >> Poster                           Poster.Component.jsx
    >> PosterSlider                     PosterSlider.Component.jsx
                                                                                   
## Cmds:
    >> Create: npx create-react-app .
    >> Run: npm start
    >> Tailwind: npm install -D tailwindcss postcss autoprefixer
                 npx tailwindcss init
    >> React-Slick: npm install react-slick   
                    npm install slick-carousel     
    >> Axios: npm i axios 
    >> HeadlessUI: npm install @headlessui/react
    >> React-Icons: npm install react-icons
    >> React Router Dom: npm i react-router-dom
                       





## Resources:
    >> https://tailwindcss.com/docs/installation
    >> https://react-slick.neostack.com/docs/get-started
    >> https://www.npmjs.com/package/axios
    >> https://axios-http.com/docs/example
    >> https://headlessui.com/react/dialog
    >> https://react-icons.github.io/react-icons/

theMovieDb APIKey = c54ab2f18bdf2fcbf4283c5aa5ab488c


# Devops
    >> Dev - Development
    >> Ops - Operation

        Dev                                                 Ops
    (Developer)--------------share code--------------->Operations (Testing, Scaling and Bug Fixing) 

    Dev------share code---->Testing Team -----|
                                              |------Code is Ok ------> Operations
                                              |------Code is Not Ok -----> Dev

    Note: Its a time taking process as the complexity of the application increases here   

## Docker & Kubernetes  


### Case Scenario: Team of 3 employess
                All have diff OS (Windows, Linux, Mac OS)

    Person 1                                Person 2                                Person 3
    Windows OS                              Linux OS                                 Mac OS
    (npm i)-----> code 10-12------->(npm i) code 25-30--------------------------> code 40-50

    >> It works on my machine


##### Virtualization
    (I could run virtual OS on top of my real time OS)    


                    Virtual OS: Linux


                    Base/Local OS: Windows
>> Resources shared with Virtual OS: [RAM, ROM, GPU]  




    Linux                               Unix
(2GB,500GB,2GB)                    (6GB,500GB,2GB)
                Base Windows
            8GB RAM, 1TB ROM, 4GB


# Containerization (Docker)

Linux                                                   Unix


                    th Docker Engine


                        Base OS
                        8GB,1TB



# Docker (EC2):
    >> Image
    >> Containers (Servers)

            >> Docker Deamon ------> Server
            >> Docker Client ------> Client
            >> Docker Swarm --------> Orchestration


# Kubernetes (Orchestra)  
        >> Nodes
                >> Master Node (Orchestra)
                >> Child Node ----||
                                  ||--POD
                                  ||--Development -> Keeps close eye on POD



16th Devops
17th Resume 
18th Last Day

Project Submission Deadline: 29th Jan

Testing doc: https://itechsight.com/razorpay-testing-cards/