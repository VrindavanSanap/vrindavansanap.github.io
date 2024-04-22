import Link from 'next/link'
import Project from './project'
export default function Projects() {

    let project = { name: "Minesweeper", 
                    desc: "Minesweeper, used convolutions to calculate neibours, floodfill to fill empty cells",
                    demo_link: "https://vrindavansanap.github.io/minesweeper/", 
                    source_link: "https://github.com/VrindavanSanap/minesweeper" }
    return (
        <div className="font-mono ml-7 mt-7">
            <h1 className="text-5xl">
                Vrindavan's Projects
            </h1>
            <div className='ml-5'>
                <Link href="/" className="underline text-2xl text-blue-600 hover:text-blue-800 visited:text-purple-600 cursor-pointer ">Home</Link>

                <h1 className="text-2xl ">
                    Projects
                </h1>
                <div className='ml-5'>
                    <Project name={project.name} desc={project.desc} demo_link={project.demo_link} 
                             source_link={project.source_link} />
                </div>
            </div>


        </div>
    )
}
