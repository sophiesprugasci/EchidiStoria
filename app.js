//sezioni capitoli a scomparsa
document.addEventListener('DOMContentLoaded', function() {     

    document.getElementById('toggle-section-1').addEventListener('click', function() {
        const section = document.getElementById('section_1').querySelector('ul');
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
    });

    document.getElementById('toggle-section-2').addEventListener('click', function() {
        const section = document.getElementById('section_2').querySelector('ul');
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
    });

    document.getElementById('toggle-section-3').addEventListener('click', function() {
        const section = document.getElementById('section_3').querySelector('ul');
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
    });
});


// //body appears 10 seconds after loading page
// document.addEventListener('DOMContentLoaded', function() {
//     setTimeout(function() {
//         document.body.style.display = 'block';
//     }, 500);
// });