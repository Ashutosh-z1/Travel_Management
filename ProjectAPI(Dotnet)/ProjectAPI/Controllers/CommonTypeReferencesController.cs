using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectAPI.Context;
using ProjectAPI.Model;

namespace ProjectAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommonTypeReferencesController : ControllerBase
    {
        private readonly NSTDbContext _context;

        public CommonTypeReferencesController(NSTDbContext context)
        {
            _context = context;
        }

        // GET: api/CommonTypeReferences
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CommonTypeReference>>> GetCommonTypes()
        {
          if (_context.CommonTypes == null)
          {
              return NotFound();
          }
            return await _context.CommonTypes.ToListAsync();
        }

        // GET: api/CommonTypeReferences/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CommonTypeReference>> GetCommonTypeReference(int id)
        {
          if (_context.CommonTypes == null)
          {
              return NotFound();
          }
            var commonTypeReference = await _context.CommonTypes.FindAsync(id);

            if (commonTypeReference == null)
            {
                return NotFound();
            }

            return commonTypeReference;
        }

        private bool CommonTypeReferenceExists(int id)
        {
            return (_context.CommonTypes?.Any(e => e.Id == id)).GetValueOrDefault();
        }




        //changing
        [HttpGet("role")]
        public async Task<ActionResult<CommonTypeReference>> GetRole(int id)
        {
            if (_context.CommonTypes == null)
            {
                return BadRequest("There is no such table");
            }
            var role = (from x in _context.CommonTypes
                        where x.Type.Equals("Role") && x.IsActive == true
                        select new
                        {
                            id = x.Id,
                            value = x.Value,
                            type = x.Type
                        }).ToList();
            if (role == null)
            {
                return BadRequest("There are no Roles");
            }
            return Ok(role);
        }
        [HttpGet("department")]
        public async Task<ActionResult<CommonTypeReference>> GetDeptment(int id)
        {
            if (_context.CommonTypes == null)
            {
                return BadRequest("There is no such table");
            }
            var department = (from x in _context.CommonTypes
                              where x.Type.Equals("Department") && x.IsActive == true
                              select new
                              {
                                  id = x.Id,
                                  value = x.Value,
                                  type = x.Type
                              }).ToList();
            if (department == null)
            {
                return BadRequest("There are no Roles");
            }

            return Ok(department);
        }



        [HttpGet("NoOfMeals")]
        public async Task<ActionResult<List<CommonTypeReference>>> GetMealType(int id)
        {
            if (_context.CommonTypes == null)
            {
                return BadRequest("There is no such table");
            }
            var NoOfMeals = (from x in _context.CommonTypes
                            where x.Type.Equals("MealType") && x.IsActive == true
                            select new
                            {
                                mealId = x.Id,
                                type = x.Value
                            }).ToList();
            if (NoOfMeals == null)
            {
                return BadRequest("There is no meal type");
            }


            return Ok(NoOfMeals);
        }

        [HttpGet("project")]
        public async Task<ActionResult<List<CommonTypeReference>>> GetProject(int id)
        {
            if (_context.CommonTypes == null)
            {
                return BadRequest("There is no such table");
            }
            var project = (from x in _context.CommonTypes
                           where x.Type.Equals("Project") && x.IsActive == true
                           select new
                           {
                               ProjectId = x.Id,
                               type = x.Value
                           }).ToList();
            if (project == null)
            {
                return BadRequest("There is no meal type");
            }


            return Ok(project);
        }

        [HttpGet("mealPreference")]
        public async Task<ActionResult<CommonTypeReference>> GetMealPreference(int id)
        {
            if (_context.CommonTypes == null)
            {
                return BadRequest("There is no such table");
            }

            var mealPreference = (from x in _context.CommonTypes
                                  where x.Type.Equals("MealPreference") && x.IsActive == true
                                  select new
                                  {
                                      mealPrefId = x.Id,
                                      type = x.Value
                                  }).ToList();
            if (mealPreference == null)
            {
                return BadRequest("There is no meal preference");
            }



            return Ok(mealPreference);
        }


        [HttpGet("flight")]
        public async Task<ActionResult<CommonTypeReference>> GetFlight(int id)
        {
            if (_context.CommonTypes == null)
            {
                return BadRequest("There is no such table");
            }

            var flight = (from x in _context.CommonTypes
                          where x.Type.Equals("Flight") && x.IsActive == true
                          select new
                          {
                              Id = x.Id,
                              type = x.Value
                          }).ToList();
            if (flight == null)
            {
                return BadRequest("There is no flight");
            }

            return Ok(flight);
        }

        [HttpGet("city")]
        public async Task<ActionResult<CommonTypeReference>> GetCity(int id)
        {
            if (_context.CommonTypes == null)
            {
                return BadRequest("There is no such table");
            }

            var city = (from x in _context.CommonTypes
                        where x.Type.Equals("City") && x.IsActive == true
                        select new
                        {
                            cityId = x.Id,
                            type = x.Value
                        }).ToList();
            if (city == null)
            {
                return BadRequest("There is no city");
            }

            return Ok(city);
        }

    }

}
