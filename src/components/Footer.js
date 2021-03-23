function Footer() {
  
   let newDate = new Date()
   let year = newDate.getFullYear();

   return (
    <footer className="footer">
      <p className="footer__copyright">© {year} Mesto Russia</p>
    </footer>
  )
}
  
  export default Footer; 