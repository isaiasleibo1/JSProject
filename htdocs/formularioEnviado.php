<?php
    $sever = 'db4free.net';
    $username = 'isaiasleibo';
    $password = 'Isaias!2021';
    $dbname = 'mastershop_gq';

    $conn = mysqli_connect($sever, $username, $password, $dbname);

    if(!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    } 

    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $email = $_POST["email"];
    $comentario = $_POST["comentario"];

    $sql = "INSERT INTO contacto (nombre, apellido, email, comentario) VALUES ('$nombre', '$apellido', '$email', '$comentario')";

    if ($nombre != "" & $apellido != "" & $email != "" & $comentario != "") {
      if(!mysqli_query($conn, $sql)) {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
      }
    }
    
?>

<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description"
    content="MasterShop es una tienda de electronica online en la que podrás conseguir los mejores dispositivos electronicos al mejor precio.">
    <link rel="shortcut icon" href="./img/MasterShop-logo/logo-rounded.png" type="image/x-icon">
    <!-- CSS -->
  <link rel="stylesheet" href="./css/dayNight.css" id="dayNightStyle">
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="./css/error.css">
  <!-- Título -->
  <title>Formulario Enviado</title>
</head>

<body>
  <header>


    <div id="headerItemContainer">
      <div class="mobileMenuOpener headerItem">
        <p>
          <i class="fa-solid fa-bars fa-xl"></i>
        </p>
      </div>
      <div class="mobileMenuCloser headerItem">
        <p>
          <i class="fa-solid fa-xmark fa-xl"></i>
        </p>
      </div>
      <div id="dayNightButton" class="headerItem pageRedirect">
        <p>
          <i class="fa-solid fa-moon"></i>
        </p>
      </div>
      <div class="headerItem pageRedirect" onclick="location.href='.'">
        <p>
          <i class="fa-solid fa-house"></i>Inicio
        </p>
      </div>
      <div class="headerItem pageRedirect">
        <p>
          <i class="fa-solid fa-user"></i>Sobre Nosotros
        </p>
      </div>
      <div class="headerItem pageRedirect" onclick="location.href='./contacto'">
        <p>
          <i class="fa-solid fa-envelope"></i>Contacto
        </p>
      </div>
      <div class="headerItem pageRedirect" onclick="location.href='./galeria'">
        <p>
          <i class="fa-solid fa-camera"></i>Galería
        </p>
      </div>
      <!-- Cart Button Opener -->
      <div id="cartButtonContainer" class="headerItem">
        <div id="cartBubble"></div>
        <div id="cartButton">
          <p>
            <i class="fa-solid fa-cart-shopping"></i>
          </p>
        </div>
      </div>
    </div>
  </header>

  <!-- Cart -->
  <div id="cart">
    <div id="closeCart"><i class="fa-solid fa-xmark fa-lg"></i></div>
    <div id="cartTitle">
      <h3>Carrito</h3>
    </div>
    <!-- Cart Empty -->
    <div id="cartNothingPart">
      <h2>No hay nada en su carrito.</h2>
    </div>
    <!-- Cart Items -->
    <div id="cartItemsContainer"></div>
    <!-- Cart Down Part (Buttons and Total) -->
    <div id="cartDownPart">
      <div id="cartArrows">
        <h2 id="cartItemCounter">Items:</h2>
        <div>
          <button id="mostrarMenos">
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
          </button>
          <button id="mostrarMas">
            <i class="fa fa-arrow-down" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div id="totalContainer">
        <p id="totalText">Total</p>
        <p id="shopping-cart-total">$0</p>
        <button id="shopping-cart-buy">Comprar</button>
      </div>
    </div>
  </div>

  <div id="mobileMenu">
    <div class="headerItem pageRedirect" onclick="location.href='.'">
      <p>
        <i class="fa-solid fa-house"></i>Inicio
      </p>
    </div>
    <div class="headerItem pageRedirect">
      <p>
        <i class="fa-solid fa-user"></i>Sobre Nosotros
      </p>
    </div>
    <div class="headerItem pageRedirect" onclick="location.href='./contacto'">
      <p>
        <i class="fa-solid fa-envelope"></i>Contacto
      </p>
    </div>
    <div class="headerItem pageRedirect" onclick="location.href='./galeria'">
      <p>
        <i class="fa-solid fa-camera"></i>Galería
      </p>
    </div>

    <div id="dayNightButtonMobile" class="headerItem pageRedirect">
      <p>
        <i class="fa-solid fa-moon"></i>Tema
      </p>
    </div>
    <h2 id="mobileHeaderTitle">MasterShop</h2>

  </div>

  <main id="productMain">
    <h1 style="text-align: center;">Formulario Enviado</h1>
  </main>

  <footer>
    <div class="social-media">
      <div class="social-media-app">
        <img class="item-img" src="./img/instagram.webp" alt="Instagram">
        <p>Instagram</p>
      </div>

      <div class="social-media-app">
        <img class="item-img" src="./img/facebook.webp" alt="Facebook">
        <p>Facebook</p>
      </div>
      <div class="social-media-app">
        <img class="item-img" src="./img/whatsapp.webp" alt="WhatsApp">
        <p>WhatsApp</p>
      </div>
    </div>
  </footer>


  <div class="cartAlert" id="cartAlert1"></div>
  <div class="cartAlert" id="cartAlert2"></div>
  <div id="cartBuy">
    <div id="cartBuyCloser">
      <i class="fa-solid fa-xmark fa-lg"></i>
    </div>
    <label for="cardNumber">Número de la tarjeta</label>
    <input autocomplete="off" type="number" name="cardNumber" id="cardNumber" required>
    <label for="cardOwner">Nombre</label>
    <input autocomplete="off" type="text" name="cardOwner" id="cardOwner" required>
    <label for="cardExpiration">Fecha de expiración</label>
    <input autocomplete="off" type="datetime" name="cardExpiration" id="cardExpiration" required>
    <label for="cardCVC">CVC</label>
    <input autocomplete="off" type="number" name="cardCVC" id="cardCVC" required>
    <button id="cardSubmit">Comprar</button>
  </div>


  <script src="https://kit.fontawesome.com/aaf7184bfe.js" crossorigin="anonymous"></script>
  <script src="./js/refreshPage.js"></script>
  <script src="./js/mobileMenu.js"></script>
  <script src="./js/cart.js"></script>
  <script src="./js/alert.js"></script>
  <script src="./js/cardDiv.js"></script>

  <script src="./js/dayNightMode.js"></script>
</body>

</html>