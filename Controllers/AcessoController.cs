using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Teste_1.Models;

namespace Teste_1.Controllers
{
    public class AcessoController : Controller
    {
        public IActionResult Login()
        {
            ViewData["Message"] = "Inform your password.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }        
    }
}
