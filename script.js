 document.addEventListener('DOMContentLoaded', function() {
            const blocks = document.querySelectorAll('.trio-block');
            
            blocks.forEach(block => {
                block.addEventListener('mouseenter', function() {
                    this.style.zIndex = '10';
                });
                
                block.addEventListener('mouseleave', function() {
                    this.style.zIndex = '';
                });
            });
        });