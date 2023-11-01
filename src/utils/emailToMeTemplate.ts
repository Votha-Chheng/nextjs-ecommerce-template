export const emailToMeTemplate = (message: string, subject: string, userEmail: string): string=> {
  return (
    `
    <h1>Message provenant de <${userEmail}></h1>
    <br/>
    <h3>Sujet : ${subject}</h3>
    <p>${message}</p>
    `
  )
}