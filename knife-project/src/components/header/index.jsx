export default function Header(){
    return (
        <div className="flex bg-red-300">
            <div className="header-top">
                <div className="left-top">
                    <ul>
                        <li className="bg-blue-950">Anasayfa</li>
                        <li>İletişim</li>
                    </ul>
                </div>
                <div className="right-top">
                    <ul>
                        <li>Üye Girişi</li>
                        <li>Üye Ol</li>
                        <li>Sepetim</li>
                    </ul>
                </div>
            </div>
            <div className="header-bot"></div>
        </div>
    )
}