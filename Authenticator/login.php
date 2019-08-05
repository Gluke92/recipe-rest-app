<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <title>Login</title>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
        <link rel="stylesheet" href="main.css">
    </head>

    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        
        <div class="container">
            <div class="row">
                <div class="col-md-4 offset-md-4 form-div login">
                    <form action="login.php" method="post">
                        <h3 class="text-center">Login</h3>

                        <!-- <div class="alert alert-danger">
                            <li>Username required</li>
                        </div> -->

                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" name="username" class="form-control form-control-lg">
                        </div>
                        <div class="form-group">
                            <label for="password">password</label>
                            <input type="password" name="password" class="form-control form-control-lg">
                        </div>
                        <div class="form-group">
                            <button type="submit" name="signup-btn" class="btn btn-primary btn-block btn-lg">Sign up</button>
                        </div>

                        <p class="text-center">Not yet a member? <a href=signup.php>Sign Up!</a></p>
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>