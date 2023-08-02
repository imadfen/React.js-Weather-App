export default function isToday(inputDate: string) { 
    const testDate = new Date(inputDate).toDateString()
    const todayDate = new Date().toDateString()

    return todayDate == testDate
}