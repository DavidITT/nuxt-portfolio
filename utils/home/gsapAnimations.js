import gsap from "gsap";

export const animateElements = () => {
    gsap.fromTo("#title",
        {x: 50, opacity: 0},
        {x: 0, opacity: 1, duration: 1, ease: 'Power1.easeInOut'});
    gsap.fromTo("#rol",
        {x: -50, opacity: 0},
        {x: 0, opacity: 1, duration: 1, ease: 'Power1.easeInOut'});

    gsap.fromTo("#phrase",
        {opacity: 0},
        {opacity: 1, ease: 'Power1.easeInOut', duration: 3});

    gsap.fromTo("#github-icon",
        {opacity: 0, scale: 1.2},
        {
            opacity: 1,
            scale: 1,
            ease: 'Power1.easeOutIn',
            delay: 0.1,
            onComplete: () => {
                gsap.to("#github-icon", {
                    scale: .6,
                    duration: 0.4,
                    yoyo: true,
                    repeat: 1,
                    ease: 'Power1.easeInOut'
                });
            }
        }
    );

    gsap.fromTo("#linkedin-icon",
        {opacity: 0, scale: 1.2},
        {
            opacity: 1,
            scale: 1,
            ease: 'Power1.easeOutIn',
            delay: 0.5,
            onComplete: () => {
                gsap.to("#linkedin-icon", {
                    scale: .6,
                    duration: 0.4,
                    yoyo: true,
                    repeat: 1,
                    ease: 'Power1.easeInOut'
                });
            }
        }
    );

    gsap.fromTo("#email-icon",
        {opacity: 0, scale: 1.2},
        {
            opacity: 1,
            scale: 1,
            ease: 'Power1.easeOutIn',
            delay: 0.8,
            onComplete: () => {
                gsap.to("#email-icon", {
                    scale: .5,
                    duration: 0.4,
                    yoyo: true,
                    repeat: 1,
                    ease: 'Power1.easeInOut'
                });
            }
        }
    );

    gsap.fromTo("#instagram-icon",
        {opacity: 0, scale: 1.2},
        {
            opacity: 1,
            scale: 1,
            ease: 'Power1.easeOutIn',
            delay: 0.6,
            onComplete: () => {
                gsap.to("#instagram-icon", {
                    scale: .5,
                    duration: 0.4,
                    yoyo: true,
                    repeat: 1,
                    ease: 'Power1.easeInOut'
                });
            }
        }
    );

    gsap.fromTo("#cv-icon",
        {opacity: 0, scale: 1.2},
        {
            opacity: 1,
            scale: 1,
            ease: 'Power1.easeOutIn',
            delay: 0.8,
            onComplete: () => {
                gsap.to("#cv-icon", {
                    scale: .5,
                    duration: 0.4,
                    yoyo: true,
                    repeat: 1,
                    ease: 'Power1.easeInOut'
                });
            }
        }
    );

    gsap.fromTo("#email-icon",
        {opacity: 0, x: 0},
        {opacity: 1, x: 0, ease: 'Power1.easeOutIn', delay: .9});

    gsap.fromTo("#shape",
        {opacity: 0,},
        {opacity: 1, ease: 'Power1.easeOutIn', delay: 1.4});

    gsap.fromTo("#photo",
        {opacity: 0,},
        {opacity: 1, ease: 'Power1.easeOutIn', delay: 1.5});

}