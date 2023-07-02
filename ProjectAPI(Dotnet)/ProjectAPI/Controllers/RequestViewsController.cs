using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectAPI.Context;
using ProjectAPI.ViewModel;

namespace ProjectAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RequestViewsController : ControllerBase
    {

        private readonly NSTDbContext dbContext;

        public RequestViewsController(NSTDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetRequestsWithDetails()
        {
            var requestViewModels = dbContext.Requests
       .Join(dbContext.Users, r => r.UserId, u => u.Id, (r, u) => new { Request = r, User = u })
       .Join(dbContext.CommonTypes, ru => ru.Request.ProjectId, p => p.Id, (ru, p) => new { ru.Request, ru.User, Project = p })
       .Join(dbContext.CommonTypes, rup => rup.Request.StatusId, ctr => ctr.Id, (rup, ctr) => new { rup.Request, rup.User, rup.Project, Status = ctr })
       .Join(dbContext.Users, rupm => rupm.Request.ManagerId, m => m.Id, (rupm, m) => new { rupm.Request, rupm.User, rupm.Project, rupm.Status, Manager = m })
       .Join(dbContext.CommonTypes, rupma => rupma.Request.TypeOfBookingid, a => a.Id, (rupma, a) => new { rupma.Request, rupma.Project,rupma.User, rupma.Status, rupma.Manager,  TypeOfBooking = a })
       .Select(r => new RequestView
       {
           RequestID = r.Request.RequestId,
           UserFirstName = r.User.FirstName,
           ProjectName = r.Project.Value,
           StatusValue = r.Status.Value,
           ManagerFirstName = r.Manager.FirstName,
           ReasonForTraveling = r.Request.ReasonForTraveling,
           BookingType = r.TypeOfBooking.Value
       })
       .ToList();

            if (requestViewModels.Count == 0 )
            {
                // Handle the case when no requests are found
                return NotFound();
            }

            return Ok(requestViewModels);
        }

    }
}
