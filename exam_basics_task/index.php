<?php

  // Get from query current page identifier 
  $routes = ['home', 'page1', 'page2'];
  $pageID = $_GET['page'] ?? 'home';
  if (!in_array($pageID, $routes, true)) $pageID = 'home';

?>
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vizsgafeladat-indító</title>
  <link rel="icon" type="image/png" href="./assets/image/favicon.png">

  <!-- Application components -->
  <link rel="stylesheet" href="../components/bootstrap/5.3.8/css/bootstrap.min.css">
  <link rel="stylesheet" href="../components/font-awesome/7.2.0/css/all.min.css">
  <link rel="stylesheet" href="./css/app.css">
</head>
<body>

  <!-- Set global application property -->
  <script>window.APP={pageID:"<?php echo $pageID;?>"};</script>

  <!-- Application root -->
  <div data-include-html="root.html"
       data-include-type="layouts"></div>

  <!-- Application components -->
  <script src="../components/bootstrap/5.3.8/js/bootstrap.bundle.min.js"></script>
  <script src="./js/app.js"></script>
</body>
</html>