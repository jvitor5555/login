import React from 'react';
import Swal from 'sweetalert2';

export const showAlert = ({
    title = '',
    text = '',
    imageUrl = '',
    imageWidth = 100,
    imageHeight = 100,
    imageAlt = '',
    html = ''
}) => {
    Swal.fire({
        title,
        text,
        imageUrl,
        imageWidth,
        imageHeight,
        imageAlt,
        html
    });
};