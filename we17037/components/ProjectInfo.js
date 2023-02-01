const ProjectInfo = ({ name, team }) => {
    return `
    <h2>${name}</h2>
    ${team ? `<h2>team</h2>
        <ul>
        ${team.map((member) => `<li>${member.name}</li>`).join('')}
        </ul>`: ""
    }
    `
}
export default ProjectInfo