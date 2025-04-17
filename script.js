// מערך תמונות רקע (ניתן להחליף לקישורים שלך)
const backgrounds = [
    'coruaso.jpg',
    'coruaso1.jpg',
    'coruaso2.jpg',
    'coruaso3.jpg',
    
];

// החלפת רקע אוטומטית כל 2 שניות
function startSlideshow() {
    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % backgrounds.length; // לופ במערך
        document.body.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
    }, 4000); // 4000 מילישניות = 4 שניות
}

// הפעלת הסליידשו עם טעינת הדף
window.onload = startSlideshow;

// פונקציה ללחיצה על מלבן
function boxClicked(boxNumber) {
    alert(`לחצת על מלבן ${boxNumber}!`);
}