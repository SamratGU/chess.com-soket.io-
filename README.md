<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>



        .chessboard{
            display: grid;
            grid-template-columns: repeat(8, minmax(0,1fr));
        grid-template-rows: repeat(8,minmax(0,1fr));
        width: 400px;
        height: 400px;
        transform: rotate(0deg);
        
        }
        
        .piece.white{
            color: white;
            filter: drop-shadow(0 0 2px rgba(0,0,0,1));
        
        }
        .piece.black{
            color: black;
        }
        
        .piece{
            font-size: 36px;
            cursor: pointer;
        }
        .piece.draggable{
            cursor: grab;
        }
        .dragging{
            opacity: 0.5;
        }
        .flipped.piece{
            transform: rotate(180deg);
        }
        .flipped{
            transform: rotate(180deg);
        }
        .square{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .square.light{
            background-color: #f0d9b5;
        }
        .square.dark{
        background-color: #b58863;
        }
        

























    </style>
</head>
<body>
    
<div class="w-full h-screen flex items-center justify-center bg-zinc-900">

    <div class="chessboard w-96 h-96 bg-red-800"></div>
</div>









<!-- *******start********************* -->
<script src="https://cdn.socket.io/4.7.5/socket.io.min.js" integrity="sha384-2huaZvOR9iDzHqslqwpR87isEmrfxqyWOF7hr7BY6KG0+hVKLoEXMPUJw3ynWuhO" crossorigin="anonymous"></script>

<!-- *******end********************* -->
 <!-- ******start chess.js*********************************** -->
 <script src="https://cdnjs.cloudflare.com/ajax/libs/chess.js/0.10.3/chess.min.js" integrity="sha512-xRllwz2gdZciIB+AkEbeq+gVhX8VB8XsfqeFbUh+SzHlN96dEduwtTuVuc2u9EROlmW9+yhRlxjif66ORpsgVA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

 <!-- ******end chess.js*********************************** -->
 <script src="/js/chessgame.js"></script>
</body>
</html>