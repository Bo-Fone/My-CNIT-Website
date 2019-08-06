<!DOCTYPE html>

<html lang="en">

    <head>
        <!-- This homework is to demonstrate html and css graphics skill. I choose to make a draft website for my own hosted minecraft server.
        Author: Bo Fone
        Created by: Mar 18, 2018 -->
        <meta name="description" content="Minetizen" />
        <meta name="keywords" content="minecraft, minetizen, survival, towny" />
        <meta name="author" content="Bo Fone" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="../reset.css" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="./minetizen.css" />
        <script src="./js/index.js"></script>
        <title>Minetizen: Enlisted</title>
    </head>

    <body>
        <div class="content w3-animate-opacity" style="animation-duration:3s;">
            <header>
                <div class="logo">
                    <a href="./index.html" target="_self">
                        <img src="./pictures/logo.png" alt="Minetizen logo." />
                    </a>
                </div>
            </header>

            <nav>
                <ul>
                    <li style="background:url(./pictures/button_pressed.png) no-repeat center; color:#FFDE57; margin: 0 auto" class="nav-button">
                        ENLISTED
                    </li>
                </ul>
            </nav>

            <section class="info">

                <div id="enlist" class="w3-animate-opacity" style="position: absolute; display: block">
                    <form>
                        <fieldset>
                                <legend>Enlisted Info</legend>
                                <ul>
                                    <?php
                                        $msg = "WHITELIST REQUEST FROM MINETIZEN.NE\n\n";
                                        $msg .= "Minecraft ID: $_POST[playername]\n";
                                        $msg .= "Mode: $_POST[favplaymode]\n";
                                        $msg .= "Age: $_POST[age]\n";
                                        $msg .= "Path: ";

                                        $path = $_POST['path'];
                                        if ($path) {
                                            foreach ($path as $p) {$msg .= "$p ";}
                                        }

                                        $msg .= "\n\nMotto: $_POST[motto]";

                                        $to = "tell.bo@icloud.com";
                                        $subject = "Minetizen Whitelist Request [$_POST[playername]]";
                                        $mailheaders = "From: bfeng7";

                                        mail($to, $subject, $msg, $mailheaders);

                                        if (mail($to, $subject, $msg, $mailheaders)) {
                                            echo("<li><h3>Enlisted!</h3></li>");
                                        } else {
                                            echo("<li><h3>Sorry, the pigeon went missing. Please try to submit again!</h3></li>");
                                        }
                                    ?>
                                    <li>
                                        <p>
                                            My Minecraft Player Name: <?php echo "<b>$_POST[playername]</b>"; ?>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            My Favorite Play Mode: <?php echo "<b>$_POST[favplaymode]</b>"; ?>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            My age is between: <?php echo "<b>$_POST[age]</b>"; ?>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            I like to become: <?php $path = $_POST['path'];
                                            if ($path) {
                                                foreach ($path as $p) {echo "<b>$p</b>", ' ';}
                                            } ?>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            My Motto: <?php echo "<b>$_POST[motto]</b>"; ?>
                                        </p>
                                    </li>
                                </ul>
                        </fieldset>
                    </form>
                    <img src="./pictures/enlistme.gif" alt="Click me to download the game." onclick="window.open('./download.html','target=_new','toolbar=0,menubar=0,scrollbars=0,status=0,resizable=1,top=200px,left=500px,fullscreen=0,Height=570px,Width=400px')"
                    />
                </div>
            </section>
        </div>

        <div class="background">
            <div id="cube">
                <figure class="back">
                    <img src="./pictures/background/back.png" alt="Panoramic background image." />
                </figure>
                <figure class="right">
                    <img src="./pictures/background/right.png" alt="Panoramic background image." />
                </figure>
                <figure class="front">
                    <img src="./pictures/background/front.png" alt="Panoramic background image." />
                </figure>
                <figure class="left">
                    <img src="./pictures/background/left.png" alt="Panoramic background image." />
                </figure>
                <figure class="top">
                    <img src="./pictures/background/top.png" alt="Panoramic background image." />
                </figure>
                <figure class="bottom">
                    <img src="./pictures/background/bottom.png" alt="Panoramic background image." />
                </figure>
            </div>
        </div>

        <footer class="w3-animate-opacity" style="animation-duration:5s;">
            <figure>
                <a href="https://validator.w3.org/check?uri=referer">
                    <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" alt="HTML5 Powered" title="HTML5 Powered" class="w3-hover-sepia"
                        onclick="window.open('https://jigsaw.w3.org/css-validator/check/referer', 'target=_blank')" />
                </a>
            </figure>
            <div>
                <button type="button" onclick="musicControl()" id="music_button">
                </button>
            </div>
            <audio autoplay id="music">
                <source src="./sound/background_music.mp3" type="audio/mpeg"> Your browser does not support the audio element.
            </audio>
        </footer>
    </body>

</html>