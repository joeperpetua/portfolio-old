<?php
    include('../noCache.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/png" href="../img/icon/user.png" sizes="32x32">
    <title>Joel Perpetua - Portfolio</title>

    <!-- styles -->
    <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="../flag-icon-css/css/flag-icon.min.css">

    <link rel="stylesheet" href="../css/sidebar.css?v=1.0.1">
    <link rel="stylesheet" href="../css/content.css?v=1.0.1">
    <link rel="stylesheet"  href="../css/style.css?v=1.0.3">
</head>
<body>
    
           
    <a id="up"></a>
    <div class="row land">

        <a href="#up" class="btn" id="goUp"><i class="fas fa-chevron-up"></i></a>
        
        <!-- sidebar -->
        <div class="col s12 m12 l3 sidebar sidenav sidenav-fixed">
                <div class="container">
                    
                    <div class="row">
                        <div class="col s12 col-img">
                            <img src="../img/me.jpg" alt="" class="responsive-img circle animated fadeIn">
                        </div>
    
                        <div class="col s12">
                            <h2 class="animated fadeIn">Perpetua Joel</h2>
                        </div>
                    </div>
    
                    <div class="row">
                        <div class="col s12 animated fadeInLeft">
                            <a href="#portfolio"><h3>PORTFOLIO</h3></a>
                        </div>
    
                        <div class="col s12 animated fadeInRight">
                            <a href="#about"><h3>ABOUT ME</h3></a>
                        </div>
    
                        <div class="col s12 animated fadeInLeft">
                            <a href="#contact"><h3>CONTACT</h3></a>
                        </div>
                    </div>
    
                    <div class="row lang animated fadeInUp">
                        <div class="input-field col s12">       
                            <select class="icons" id="lang">
                                <option value="en" data-icon="../img/flag/en.png">English</option>
                                <option value="fr" data-icon="../img/flag/fr.png">Français</option>
                                <!-- <option value="es" data-icon="../img/flag/es.png">Español</option> -->

                            </select>
                            <label>Website Language</label>
                        </div>
                    </div>
                </div>
        </div>

        <!-- content -->
        <div class="col s12 m12 content">
            
            <!-- Portfolio -->
            <a id="portfolio"></a>
            <div class="row">
                <h1>PROJECTS</h1>
                

                <!-- exoPhone -->
                <div class="col s12">
                    <h2>PHP e-commerce (DEMO)</h2>
                    <div>
                        <img src="../img/exophone.png" class="responsive-img hide-on-med-and-down" />
                        <img src="../img/exophone-mobile.png" class="responsive-img hide-on-large-only" />
                    </div>

                    <div class="col s12">
                        <h3><b>Features</b></h3>
                        <ul class="browser-default">
                            <li>Login / Signup (email only)</li>
                            <li>Password recovery</li>
                            <li>Shopping cart</li>
                            <li>Filters</li>
                            <li>Detailed product description</li>
                            <li>CRUD</li>
                            <li>Orders review system</li>
                            <li>Multirelational DB</li>
                            <li>Custom product recommendation tool</li>
                        </ul>

                        <h3><b>Technologies used</b></h3>
                        <ul class="browser-default">
                            <li>HTML5</li>
                            <li>CSS / BULMA CSS</li>
                            <li>JQUERY / Vanilla JS</li>
                            <li>PHP</li>
                            <li>MySQL</li>
                        </ul>

                        <br>

                        <a class="waves-effect waves-light btn" href="https://github.com/joeperpetua/ecommerce-redesign"><i class="fab fa-github material-icons"></i></a>
                        <a class="waves-effect waves-light btn" href="http://exophone.rf.gd"><i class="material-icons left"></i>demo</a>
                    </div>
                </div>

                <!-- React e-commerce -->
                <div class="col s12">
                    <hr>
                        <h2>React e-commerce (DEMO)</h2>
                        <div>
                            <img src="../img/react-app.jpg" class="responsive-img hide-on-med-and-down" />
                            <img src="../img/react-app-mobile.png" class="responsive-img hide-on-large-only" />
                        </div>

                        <div class="col s12">
                            <h3><b>Features</b></h3>
                            <ul class="browser-default">
                                <li>Detailed product description</li>
                                <li>Multirelational DB</li>
                                <li>Connects with DB through a REST API</li>
                            </ul>
        
                            <h3><b>Technologies used</b></h3>
                            <ul class="browser-default">
                                <li>ReactJS</li>
                                <li>react-router / react-bootstrap</li>
                                <li>HTML5 / CSS</li>
                            </ul>
                            <br>
    
                            <a class="waves-effect waves-light btn" href="https://github.com/joeperpetua/react-app"><i class="fab fa-github material-icons"></i></a>
                            <!-- <a class="waves-effect waves-light btn" href=""><i class="material-icons left"></i>view</a> -->
                        </div>
                    </div>

                <!-- React e-commerce -->
                <div class="col s12">
                    <hr>
                    <h2>Phonegap e-commerce (DEMO)</h2>
                    <div>
                        <img src="../img/exo-app-desk.png" class="responsive-img hide-on-med-and-down" />
                        <img src="../img/exo-app.png" class="responsive-img hide-on-large-only" />
                    </div>

                    <div class="col s12">
                        <h3><b>Features</b></h3>
                        <ul class="browser-default">
                            <li>Native APK build</li>
                            <li>Detailed product description</li>
                            <li>Multirelational DB</li>
                            <li>Connects with DB through a REST API</li>
                        </ul>
            
                        <h3><b>Technologies used</b></h3>
                        <ul class="browser-default">
                            <li>Phonegap</li>
                            <li>Vanilla JS</li>
                            <li>HTML5 / Bootstrap CSS</li>
                        </ul>
                        <br>
        
                        <a class="waves-effect waves-light btn" href="https://github.com/joeperpetua/exo-app"><i class="fab fa-github material-icons"></i></a>
                        <!-- <a class="waves-effect waves-light btn" href=""><i class="material-icons left"></i>view</a> -->
                        </div>
                </div>                    

                <!-- Emanuel Asociacion Cristiana -->
                <div class="col s12">
                    <hr>
                        <h1>Emanuel Asociacion Cristiana</h1>
                        <div>
                            <img src="../img/asocia.jpg" class="responsive-img hide-on-med-and-down" />
                            <img src="../img/asocia-mobile.png" class="responsive-img hide-on-large-only" />
                        </div>

                        <div class="col s12">
                            <h3><b>Features</b></h3>
                            <ul class="browser-default">
                                <li>Schedules and price charts</li>
                                <li>Description of activities</li>
                                <li>Weekly blog</li>
                            </ul>
    
                            <h3><b>Technologies used</b></h3>
                            <ul class="browser-default">
                                <li>Wordpress CMS</li>
                                <li>Avada Themes</li>
                                <li>Avada Fusion Builder</li>
                                <li>CSS</li>
                            </ul>
                            <br>

                            <a class="waves-effect waves-light btn disabled"><i class="fab fa-github material-icons"></i></a>
                            <a class="waves-effect waves-light btn" href="https://asociacionemanuel.org"><i class="material-icons left"></i>view</a>
                        </div>
                    </div>                
            </div>

            <!-- About -->
            <a id="about"></a>
            <div class="row">
                <hr>
                <h1>ABOUT ME</h1>
                
                <div class="col s12">
                    <p>I am Joel, I am 19 years old and am currently located in Buenos Aires, Argentina.</p>
                    <br>
                    <p>I have graduated from E.E.S.T N7 "José Hernández" highschool in December 2019 which allowed me to get a degree in programming and to specialize in web development.</p>
                    <br>
                    <p>I've done some projects, as shown <a href="#portfolio">above</a>, and dabbled into different technologies. I have experience working in:</p>
                    
                    <h3><b>Prog. Languages:</b></h3>
                    <ul class="browser-default">
                        <li>JavaScript</li>
                        <li>PHP</li>
                        <li>SQL</li>
                        <li>HTML / CSS</li>
                        <li>Java</li>
                    </ul>  
                    
                    <h3><b>Development tools:</b></h3>
                    <ul class="browser-default">
                        <li>ReactJS (react-router / react-strap)</li>
                        <li>FireBase / FireStore</li>
                        <li>Strapi</li>
                        <li>Bulma CSS / Bootstrap CSS / Materialize CSS</li>
                        <li>Wordpress</li>
                        <li>Phonegap (with API REST)</li>
                        <li>Git (Github / Gitlab)</li>
                        <li>JIRA</li>
                    </ul>
                    <br>
                    
                    <p>Spanish is my mother tongue, I speak English fluently and I am currently studying French. I am planning to go to France for about a year, starting on 2020, 
                            to learn about its culture, get to know its people, to get a better grasp of the language and gain some profesional experience.</p>
                    <br>
                    <p>I am very passionate about learning new things, about developing personally and profesionally, and also enjoy my time with the people I love.</p>
                    <br>
                    <p>I've taken place in numerous events and forums discussing the topics all the way from cyber security to internet governance.</p>
                    <br>
                    <p>All my participation certificates are available <a href="http://joeperpetua.me/res/#certificates">here</a>.</p>
                    <br>
                    <p>My CV is also available <a href="http://joeperpetua.me/res/">here</a> in English, French and Spanish.</p>
                    

                </div>

            </div>

     
            
            <!-- Contact -->
            <a id="contact"></a>
            <div class="row">
                <hr>
                <h1>CONTACT</h1>


                

                <div class="col s12">
                    <form action="../sendMail.php" method="POST">
                        <div class="row">
                            <div class="input-field col s12">
                                <input name="email" id="email" type="email" class="validate" required>
                                <label for="email">Email</label>
                                <span class="helper-text" data-error="Type a valid email adress" data-success="Valid email adress"></span>
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-field col s12">
                                <input name="subject" id="subject" type="text" required>
                                <label for="subject">Subject</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-field col s12">
                                <textarea name="message" id="textarea" cols="30" rows="100" required></textarea>
                                <label for="textarea">Message</label>
                            </div>
                        </div>
                        <b><input type="submit" name="submit" class="btn right" value="Send"></b>
                    </form>                                       
                </div>

                <footer class="footer">
                    <div class="col s12">  
                        <div class="container">
                            <a class="waves-effect waves-light btn" href="https://www.linkedin.com/in/joel-p-10ab3911a/"><i class="material-icons fab fa-linkedin-in"></i></a>
                            <a class="waves-effect waves-light btn" href="https://www.github.com/joeperpetua"><i class="material-icons fab fa-github"></i></a>
                            <a class="waves-effect waves-light btn modal-trigger" href="#modal1"><i class="material-icons far fa-envelope"></i></a>
                        </div>
                    </div>

                   
                        <div class="container">
                            <script type="text/javascript"> //<![CDATA[
                                var tlJsHost = ((window.location.protocol == "https:") ? "https://secure.trust-provider.com/" : "http://www.trustlogo.com/");
                                document.write(unescape("%3Cscript src='" + tlJsHost + "trustlogo/javascript/trustlogo.js' type='text/javascript'%3E%3C/script%3E"));
                                //]]>
                            </script>
    
                            <script language="JavaScript" type="text/javascript">
                                TrustLogo("https://www.positivessl.com/images/seals/positivessl_trust_seal_md_167x42.png", "POSDV", "none");
                            </script>                            
                        </div>
                  
                </footer> 

                <!-- email adress modal -->
                <div id="modal1" class="modal">
                    <div class="modal-content">
                      <h3>email adress:</h3>
                      <a href="mailto:joelperpetua@gmail.com" class="center-align">joelperpetua@gmail.com</a>
                    </div>
                    <div class="modal-footer">
                      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Got it!</a>
                    </div>
                </div>

                  <!-- language selection modal -->
                <span>
                    <div id="language" class="modal">
                        <div class="modal-content lang-modal">
                            <h3>Please choose your language</h3>
                            <a href="http://www.joeperpetua.me/en" class="btn center-align blue-grey darken-3">English <span class="flag-icon flag-icon-gb"></span></a>
                            <a href="http://www.joeperpetua.me/fr" class="btn center-align blue-grey darken-3">Français <span class="flag-icon flag-icon-fr"></span></a>
                        </div>
                    </div>
                </span>
                
            

            </div>
        </div>
    </div>



    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script src="../js/script.js?v=1.0.2"></script>
</body>
</html>