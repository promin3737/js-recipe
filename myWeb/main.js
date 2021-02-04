//スライドショー で表示させる画像パスを変数に格納
const setImage = [
  "tourou_JPG.jpg",
  "shrine_JPG.jpg",
  "baseball_JPG.jpg",
  "Eco-Habitat関西学院_JPG.jpg",
  "tourou_JPG.jpg"];

//カウンターの初期値設定
let counter = 0;

//設定した画像パスをid="slideshow"のbackground-imageに設定する、繰り返す
function slideimage(){
    //カウンターが設定画像数より大きいか確認
    if(counter >= (setImage.length-1)){
        //カウンターを初期値に戻す
        counter = 0;
    }
    //背景画像を設定
    document.getElementById("slideshow").style.backgroundImage = "url(" + setImage[counter] + ")";
    //カウントアップ
    counter++;
}

//5秒ごとに背景画像を切り替える
setInterval("slideimage()",5000);