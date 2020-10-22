const output = $('#output');
let count = parseInt(localStorage.getItem('count'));
output.text(count);
$('button').click(function () {
    const btnId = $(this).attr('id');
    if (btnId === 'inc') count++;
    else count--;
    $('#output').text(count);
    localStorage.setItem('count', count);
});