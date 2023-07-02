using Microsoft.Build.Evaluation;
using Microsoft.VisualBasic;
using System.Data;
using System.Globalization;
using System.Reflection.Metadata.Ecma335;

namespace ProjectAPI.Model
{
    public class Request
    {
        public int RequestId { get; set; }
        //public string UserName { get; set; }

         public User?  User { get; set; }

        public int UserId { get; set; }

        public CommonTypeReference? Project { get; set; }

        public int? ProjectId { get; set; }

        public string ReasonForTraveling { get; set; }


        public virtual CommonTypeReference? TypeOfBooking { get; set; }
        public int? TypeOfBookingid { get; set; }

        public virtual User? Manager { get; set; }
        public int ManagerId { get; set; }

        public virtual CommonTypeReference? Status { get; set; }        
        public int? StatusId { get; set; }

        public string CreatedBy { get; set; }

        public DateTime CreatedDate { get; set; } = DateTime.Now;

        public string? ModifiedBy { get; set; }

        public DateTime? ModifiedDate { get; set; }

        public Boolean IsActive { get; set; } = true;



    }
}
