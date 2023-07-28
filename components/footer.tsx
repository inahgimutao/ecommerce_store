
const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t">
        <div className="mx-auto py-10">
            <p className="text-center text-xs text-black">
                &copy; {year} E-Commerce Store, All Rights Reserved
            </p>
        </div>
    </footer>
  )
}

export default Footer