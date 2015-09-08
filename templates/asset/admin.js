$.material.init();
$('.datetime input').datetimepicker(
    {locale: 'en-gb'}
);

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});