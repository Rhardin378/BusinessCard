
export default function Info(){
    return (
        <section>
            <img id="profilePhoto" src="/profilePhoto.jpg" />
            <h1 id="name">Ryan Hardin </h1>
            <h2 id="title">Full-Stack Developer</h2>
            <h2 id="website"><a href="https://ryan-hardin.netlify.app">ryan-hardin.netlify.app</a></h2>
            <section id="contact">
                <button id="email"><a href="mailto:rhardin378@gmail.com" target="_blank">
                <i class="fa-solid fa-envelope"></i>
                    <span id="emailSpan">Email</span>
                     </a>
                </button>
                <a href="https://www.linkedin.com/in/rhardin378/" target="_blank">
                <button id="linkedin">
                    
                    <i class="fa-brands fa-linkedin"></i>
                        <span>LinkedIn</span>
                       </button>
                       </a>

            </section>
        </section>
    )
}