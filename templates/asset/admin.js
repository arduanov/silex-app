//$('.datetime input').datetimepicker(
//    {locale: 'en-gb'}
//);

var simplemdeToolbar = [
    {
        name: "bold",
        action: toggleBold,
        className: "btn btn-default mdi-editor-format-bold",
        title: "Bold (Ctrl+B)",
    },
    //{
    //    name: "italic",
    //    action: toggleItalic,
    //    className: "mdi-editor-format-italic",
    //    title: "Italic (Ctrl+I)",
    //},
    //{
    //    name: "strikethrough",
    //    action: toggleStrikethrough,
    //    className: "mdi-editor-format-strikethrough",
    //    title: "Strikethrough",
    //},
    {
        name: "heading-1",
        action: toggleHeading1,
        className: "btn btn-default mdi-editor-format-color-text",
        title: "Big Heading",
    },
    //{
    //    name: "heading-2",
    //    action: toggleHeading2,
    //    className: "mdi-content-text-format",
    //    title: "Medium Heading",
    //},
    {
        name: "code",
        action: toggleCodeBlock,
        className: "btn btn-default mdi-action-receipt",
        title: "Code (Ctrl+Alt+C)",
    },
    {
        name: "quote",
        action: toggleBlockquote,
        className: "btn btn-default mdi-editor-format-quote",
        title: "Quote (Ctrl+')",
    },
    {
        name: "unordered-list",
        action: toggleUnorderedList,
        className: "btn btn-default mdi-editor-format-list-bulleted",
        title: "Generic List (Ctrl+L)",
    },
    {
        name: "ordered-list",
        action: toggleOrderedList,
        className: "btn btn-default mdi-editor-format-list-numbered",
        title: "Numbered List (Ctrl+Alt+L)",
    },
    {
        name: "link",
        action: drawLink,
        className: "btn btn-default mdi-editor-insert-link",
        title: "Create Link (Ctrl+K)",
    },
    {
        name: "image",
        action: drawImage,
        className: "btn btn-default mdi-editor-insert-photo",
        title: "Insert Image (Ctrl+Alt+I)",
    },
    {
        name: "preview",
        action: togglePreview,
        className: "btn btn-default fa-eye mdi-action-visibility",
        title: "Toggle Preview (Ctrl+P)",
    },
    {
        name: "side-by-side",
        action: toggleSideBySide,
        className: "btn btn-default fa-columns mdi-image-compare",
        title: "Toggle Side by Side (F9)",
    },
    {
        name: "fullscreen",
        action: toggleFullScreen,
        className: "btn btn-default fa-arrows-alt mdi-navigation-fullscreen",
        title: "Toggle Fullscreen (F11)",
    }
];

var simplemde = new SimpleMDE(
    {
        element: document.getElementById("form_content"),
        toolbar: simplemdeToolbar
    }
);
simplemde.render();