const output = $('#output');
let stored = parseInt(localStorage.getItem('count'));
let count = !isNaN(stored) ? stored : 0;
output.text(count);
$('button').click(function () {
    const btnId = $(this).attr('id');
    if (btnId === 'inc') count++;
    else count--;
    $('#output').text(count);
    localStorage.setItem('count', count);
});