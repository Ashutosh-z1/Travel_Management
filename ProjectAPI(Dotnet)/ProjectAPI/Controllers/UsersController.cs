using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.DotNet.Scaffolding.Shared.Messaging;
using Microsoft.EntityFrameworkCore;
using ProjectAPI.Context;
using ProjectAPI.Model;
using ProjectAPI.ViewModel;
using static NuGet.Packaging.PackagingConstants;

namespace ProjectAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
   // [Authorize(Roles = "Admin,Manager")]
    public class UsersController : ControllerBase
    {
        private readonly NSTDbContext _context;

        public UsersController(NSTDbContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            if (_context.Users == null)
            {
                return NotFound();
            }

            // var  obj = _context.CommonTypes.Where(x => x.Id == User.
            //var result = from User in _context.Users join CommonTypeReference in _context.CommonTypes on User.RoleId equals CommonTypeReference.Id select new UserViewModel { RoleName = CommonTypeReference.Value, EntityAProperty2 = entityA.Property2, EntityBProperty = entityB.Property }; return View(result.ToList());
            //var userList = await _context.Users.ToListAsync();
            UserViewModel v = new UserViewModel();
            //var roleobj = new CommonTypeReference();
            //foreach (var user in userList)
            //{
            //   var roleobj = _context.CommonTypes.Where(x => x.Id == user.RoleId).FirstOrDefault();
            //    v.RoleName = roleobj.Value;
            //}
            //foreach (var user in userList)
            //{
            //    var depobj = _context.CommonTypes.Where(x => x.Id == user.DepartmentId).FirstOrDefault();
            //    v.DepartmentName = depobj.Value;
            //}
            //foreach (var user in userList)
            //{
            //    var Managerobj = _context.Users.Where(x => x.Id == user.ManagerId).FirstOrDefault();
            //    v.MiddleName = Managerobj.FirstName;
            //}
            //foreach (var user in userList)
            //{
            //    v.FirstName = user.FirstName;
            //    v.MiddleName = user.MiddleName;
            //    v.LastName = user.LastName;
            //    v.Email = user.Email;
            //    v.ContactNumber = user.ContactNumber;
            //}

        //    var query = from u in _context.Users
        //                join r in _context.CommonTypes on u.RoleId equals r.Id
        //                join d in _context.CommonTypes on u.DepartmentId equals d.Id
        //                select new
        //                {
        //                    u.FirstName,
        //                    u.LastName,
        //                    u.Email,
        //                    u.ContactNumber,
        //                    u.Manager,
        //                    DepartmentName = d.Value,
        //                    RoleName = r.Value
        //};

           // return query;


            //User obj = await _context.Users.Where()

            return await _context.Users.Where(x=>x.IsActive==true).ToListAsync();
            //return User;
        }



        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
          if (_context.Users == null)
          {
              return NotFound();
          }
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
          if (_context.Users == null)
          {
              return Problem("Entity set 'NSTDbContext.Users'  is null.");
          }
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            if (_context.Users == null)
            {
                return NotFound();
            }
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            foreach (var temp in _context.Users)
            {
                if (temp.Id == id)
                {
                    temp.IsActive = false;
                }
            }
            //_context.Users.FirstOrDefault(x => x.IsActive == true).IsActive = false;


            //_context.Users.Update(user);    

            // _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(int id)
        {
            return (_context.Users?.Any(e => e.Id == id)).GetValueOrDefault();
        }




        //get mamnager
        [HttpGet("manager")]
        public async Task<ActionResult<User>> GetManager(int id)
        {
            if (_context.Users == null)
            {
                return NotFound();
            }
            if (_context.CommonTypes == null)
            {
                return BadRequest("There is no such table");
            }

            var users = (from x in _context.Users
                         where x.Role.Value.Equals("Manager") && x.IsActive == true
                         select new
                         {
                             Id = x.Id,
                             FirstName = x.FirstName,
                             LasName = x.LastName,
                             Email = x.Email,



                         }).ToList();
            if (users == null)
            {
                return BadRequest("There are no Roles");
            }

            return Ok(users);
        }
    }
}
