import React from 'react';
import Swal from 'sweetalert2';

export const showAlert = ({
    title = '',
    text = '',
    imageUrl = '',
    imageWidth = 100,
    imageHeight = 100,
    imageAlt = ''
}) => {
    Swal.fire({
        title,
        text,
        icon,
        imageUrl,
        imageWidth,
        imageHeight,
        imageAlt
    });
};