using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.DotNet.Scaffolding.Shared.Messaging;
using Microsoft.IdentityModel.Tokens;
using ProjectAPI.Context;
using ProjectAPI.Model;
using ProjectAPI.Model;
using ProjectAPI.ViewModel;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ProjectAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        NSTDbContext _context;
        IConfiguration _config;

        public AuthenticationController(NSTDbContext context, IConfiguration config)
        {
            _context = context;
            _config = config;

        }

        [HttpPost]
        public IActionResult Login(LoginViewModel user)
        {

            IActionResult response = Unauthorized();
            var obj = Authenticate(user);

           CommonTypeReference c = _context.CommonTypes.Where(x => x.Id == obj.RoleId).FirstOrDefault();
            user.RoleName = c.Value;
            
            //User u = _context.Users.Where(x => x.RoleId == obj.RoleId).FirstOrDefault();  
            //User u = _context.Users.Where(x => x.Id == obj.Id).FirstOrDefault();
            //  Role r = _context.Roles.Where(x => x.Id == u.RoleId).FirstOrDefault();
            // user.RoleName = r.Name;

            if (obj != null)
            {
                var tokenString = GenerateJSONWebToken(obj.Id, user.Email, user.RoleName);
                response = Ok(new { token = tokenString , Message = "success" , Name = obj.FirstName});
                
            }
            return response;
        }

        private string GenerateJSONWebToken(int id, string email, string roleName)
        {
            var claims = new List<Claim>();
            claims.Add(new Claim("id", id.ToString()));
            claims.Add(new Claim("email", email));
            claims.Add(new Claim("Role", roleName.ToString()));
            
           
            //    Claim[] claims = new[]
            //{        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            //         new Claim(JwtRegisteredClaimNames.Sid, id.ToString()),
            //         new Claim(JwtRegisteredClaimNames.Email, email ),
            //         new Claim(ClaimTypes.Role, roleName.ToString()),
            //         new Claim(type:"Date", DateTime.Now.ToString())
            //    };
            var securityKey = new
            SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey,
            SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
           _config["Jwt:Issuer"],
           claims,
           expires: DateTime.Now.AddMinutes(120),
           signingCredentials: credentials);
            return new JwtSecurityTokenHandler().WriteToken(token);
        }


        private User Authenticate(LoginViewModel user)
        {
            
            User obj = _context.Users.FirstOrDefault(x => x.Email == user.Email
            && x.Password == user.Password);
            return obj;
        }

        //[HttpGet]
        //public LoginViewModel getRoleName(Logi user)
        //{
        //    IActionResult response = Unauthorized();
        //    var obj = Authenticate(user);

        //    CommonTypeReference c = _context.CommonTypes.Where(x => x.Value == obj.RoleId).FirstOrDefault();
        //    user.RoleName = c.Type;
        //    return user.RoleName;
        //}


    }
}
