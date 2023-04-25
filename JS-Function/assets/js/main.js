//a) Toplama çıxma, vurma, bölməyə uyğun funksiya yaradirsiz 2 eded ve 1 operator('+', '-', '*', '/') qebul edir.Qebul etdiyi operatora uygun a və b ədədləri üzərində hesablama aparib alinan deyeri qaytarır.
// function accountsPayable(a,c,b){
//     switch (c){
//         case "+":
//             console.log(Number(a)+Number(b));
//             break;
//         case "-":
//             console.log(a-b);
//             break;
//         case "*":
//             console.log(a*b);
//             break;
//         case "/":
//             console.log(a/b);
//             break;        
//     }
// }
// accountsPayable(prompt(), prompt(), prompt());



//b) Methodlar yaradirsiz. Methoda ad gonderende adi ekrana cixardir(Sabir), ad ve soyad gonderende soyadi adi ekrana cixardir(Guliyev Sabir), ad,soyad ve ata adı göndərildikdə adin baş hərfi nöqtə soyad ata adi ekrana cixardirsiz(S.Guliyev Mehti). Methodlarin adi eyni olmalıdır.
// var name=prompt("Adı daxil edin:");
// function personInput(){
// return name;
// }
// console.log(name);

// var surname=prompt("Soyadı daxil edin:");
// function personInput(){
// return surname;
// }
// console.log(surname + " " + name);
// var fathername=prompt("Atasının adını daxil edin:");
// function personInput(){
// return fathername;
// }
// console.log(name[0]+ "." + surname + " " +fathername);




//c) 1 eded daxil edin. Eger o eded 50den kicikdirse o edede qeder 3-e bolunen, 50-100 araligindadirsa o edede qeder 5e bolunen, 100den boyukdurse o edede qeder 8 e bolunen ededlerin sayini ekrana cixardan bir alqoritm yazin.
// function numInput(num) {
//     var say = 1;
//     if (num < 50) {
//         for (i = 0; i < num; i++) {
//             if (i % 3 == 0) {
//                 console.log(say);
//                 say += 1;
//             }
//         }
//     }
//     else if (num >= 50 && num <= 100) {
//         for (i = 0; i < num; i++) {
//             if (i % 5 == 0) {
//                 console.log(say);
//                 say += 1;
//             }
//         }
//     }
//     else if (num > 100) {
//         for (i = 0; i < num; i++) {
//             if (i % 8 == 0) {
//                 console.log(say);
//                 say += 1;
//             }
//         }
//     }
// }
//     numInput(prompt());