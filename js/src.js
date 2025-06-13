<script src="./js/jquery.countup.js"> 
    
        $('.counter').countUp();
     

     OWL CAROUSEL JS  
    <script src="./js/owl.carousel.min.js"> 

    
        $('.owl-carousel').owlCarousel({
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            loop: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1500,
            animateOut: 'fadeOut',
            responsive: {
                0: {
                    items: 1
                }
            }
        })

     

     MODAL JS  
    
        const clickBtns = document.querySelectorAll('.js-click-btn')
        const modal = document.querySelector('.js-modal')
        const modalContainer = document.querySelector('.js-modal-container')
        const modalClose = document.querySelector('.js-modal-close')

        // Hàm hiển thị modal (thêm class open vào modal)
        function showModal() {
            modal.classList.add('open')
        }

        // Hàm ẩn modal(gỡ bỏ class open của modal)
        function hiddenModal() {
            modal.classList.remove('open')
        }

        // Lặp qua từng thẻ button và nghe hành vi click
        for (const clickBtn of clickBtns) {
            clickBtn.addEventListener('click', showModal)
        }

        // Nghe hành vi click vào button close
        modalClose.addEventListener('click', hiddenModal)

        modal.addEventListener('click', hiddenModal)

        modalContainer.addEventListener('click', function (event) {
            event.stopPropagation()
        })
     

     POPUP - VIDEO JS  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"> 
    
        $(document).ready(function () {
            $(".popup-with-zoom-anim").magnificPopup({
                type: "inline",
                fixedContentPos: false,
                fixedBgPos: true,
                overflowY: "auto",
                closeBtnInside: true,
                preloader: false,
                midClick: true,
                removalDelay: 300,
                mainClass: "my-mfp-zoom-in"
            });
        });


     

     LIGHTBOX JS  
    <script src="./js/lsb.min.js"> 
    
        $.fn.lightspeedBox({
            showImageTitle: true,
            showImageCount: true,
            showDownloadButton: true,
            showAutoPlayButton: true,
            autoPlayback: false,
            playbackTiming: 3500,
            zIndex: 30,
            locale: {
                nextButton: 'Next image',
                prevButton: 'Previous image',
                closeButton: 'Close',
                downloadButton: 'Download image',
                noImageFound: 'Sorry, no image found.',
                autoplayButton: 'Enable autoplay'
            }
        });
     

     Back to Top JS  
    <script src="./js/util.js"> 
    <script src="./js/main-backToTop.js"> 

     {/* Navigation bar JS   */}
        var mainNav = document.getElementById("mainNav");
        {/* thẻ con li */}
        var listNav = mainNav.getElementsByTagName("li");
        for (var i = 0; i < listNav.length; i++) {
            listNav[i].addEventListener("click", function () {
                //Tìm thẻ đang được gắn class active
                var current = document.querySelector("#mainNav .active");
                //Xóa class active của thẻ đang được gắn
                current.className = current.className.replace("active", "");
                this.className += "active";
            });
        }
     