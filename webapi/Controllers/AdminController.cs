using Microsoft.AspNetCore.Mvc;
using webapi.Models;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    public class AdminController : Controller
    {
        public IActionResult Index()
        {
            var dbContext = new MasterContext();
            var products = dbContext.TblProducts.ToList();
            return Ok(products);
        }
    }
}
