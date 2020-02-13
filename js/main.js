new Glider(document.querySelector(".glider"), {
    slidesToShow: 3,
    draggable: true,
    dots: '#dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },
    responsive: [
        {
            breakpoint: 801,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 'auto',
                slidesToScroll: 'auto',
                itemWidth: 150,
                duration: 0.25
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
            }
        }
    ]
})

// window.addEventListener('load', function () {
//     new Glider(document.querySelector('.glider'), {
//         // Mobile-first defaults
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         scrollLock: true,
//         dots: '#resp-dots',
//         arrows: {
//           prev: '.glider-prev',
//           next: '.glider-next'
//         },
//         responsive: [
//           {
//             // screens greater than >= 775px
//             breakpoint: 775,
//             settings: {
//               // Set to `auto` and provide item width to adjust to viewport
//               slidesToShow: 'auto',
//               slidesToScroll: 'auto',
//               itemWidth: 150,
//               duration: 0.25
//             }
//           },{
//             // screens greater than >= 1024px
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 1,
//               itemWidth: 150,
//               duration: 0.25
//             }
//           }
//         ]
//       });
// })