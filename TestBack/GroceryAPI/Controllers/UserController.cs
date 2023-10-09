using GroceryAPI.Data;
using GroceryAPI.Models;
using GroceryAPI.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GroceryAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly groceryDbContext _groceryDbContext;

        private readonly IConfiguration _configuration;

        public UserController(groceryDbContext groceryDbContext, IConfiguration configuration)
        {
            this._groceryDbContext = groceryDbContext;
            this._configuration = configuration;
        }

        [AllowAnonymous]
        [HttpPost("CreateUser")]
        public IActionResult Create(User user)
        {
            if (_groceryDbContext.Users.Where(u => u.Email == user.Email).FirstOrDefault() != null)
            {
                return Ok("Already Exits");
            }

            user.MemberSince = DateTime.Now;
        //    if (user.Email == "mentor@nagarro.com")
        //    {
         //       user.IsAdmin = true;
        //    }
         //   else
         //   {
         //       user.IsAdmin = false;
         //   }

            _groceryDbContext.Users.Add(user);
            _groceryDbContext.SaveChanges();

            return Ok("Success");

        }



        [HttpPost("LoginUser")]
        public IActionResult Login(Login user)
        {

            var userAvaliable = _groceryDbContext.Users.Where(u => u.Email == user.Email && u.Pwd == user.Pwd).FirstOrDefault();

            if (userAvaliable != null)

            {
                return Ok(new JwtService(_configuration).GenerateToken(

                    userAvaliable.UserId.ToString(),

                    userAvaliable.Name,

                    userAvaliable.Email,

                    userAvaliable.Mobile,

                    userAvaliable.IsAdmin,

                    userAvaliable.MemberSince


                    )

                    );

            }

            return Ok("Failure");

        }

    }
}
