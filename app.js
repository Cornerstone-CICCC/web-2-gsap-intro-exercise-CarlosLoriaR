const timeline = gsap.timeline({ repeat: true })

timeline.from(".red", {
    x: '-100%',
    y: '-100%',
})
    .to(".red", {
        x: 0,
        y: 0,
        duration: .5
    })

    .from(".green", {
        x: '100%',
        y: '-100%',
    })
    .to(".green", {
        x: 0,
        y: 0,
        duration: .5
    })

    .from(".blue", {
        x: '100%',
        y: '100%',
    })
    .to(".blue", {
        x: 0,
        y: 0,
        duration: .5
    })

    .from(".yellow", {
        x: '-100%',
        y: '100%',
    })
    .to(".yellow", {
        x: 0,
        y: 0,
        duration: .5
    })

    .to(".red", {
        left: '100vw',
        x: '-100%',
        borderRadius: '50%',
        backgroundColor: 'green',
        duration: .5
    })

    .to(".green", {
        y: '-100%',
        top: '100vh',
        borderRadius: '50%',
        backgroundColor: 'blue',
        duration: .5
    }, '<')

    .to(".blue", {
        right: '100vw',
        x: '100%',
        borderRadius: '50%',
        backgroundColor: 'yellow',
        duration: .5
    }, '<')

    .to(".yellow", {
        bottom: '100vh',
        y: '100%',
        borderRadius: '50%',
        backgroundColor: 'red',
        duration: .5
    }, '<')
    /*  */
    .to(".yellow", {
        x: '-100%',
        duration: .5
    })

    .to(".red", {
        x: '100%',
        duration: .5
    }, '<')

    .to(".green", {
        x: '100%',
        duration: .5
    }, '<')

    .to(".blue", {
        x: '-100%',
        duration: .5
    }, '<')
