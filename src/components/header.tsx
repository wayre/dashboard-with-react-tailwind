export function Header() {
  return (
    < div className="flex row justify-between items-center gap-2 p-4 bg-slate-800 border-b border-slate-700">
      <div className="flex row items-center gap-2">
        <img className="w-10" src="http://github.com/wayre.png" alt="" />
        <span>Exemplo de Sistema</span>
      </div>
      {/* box-actions */}
      <div>
        <ul className="main-menu flex col gap-2">
          <li><a href="#">item</a></li>
          <li><a href="#">item</a></li>
          <li><a href="#">item</a></li>
          <li><a href="#">item</a></li>
        </ul>
      </div>
    </div >
  )
}