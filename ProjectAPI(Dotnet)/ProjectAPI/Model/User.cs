using System.Reflection.Metadata.Ecma335;

namespace ProjectAPI.Model
{
    public class User
    {

        public int Id { get; set; }   

        public string Email  { get; set; }
        public string FirstName { get; set; }

        public string? MiddleName { get; set; }  
        public string LastName { get; set; }

        public string Password { get; set; }

        public string? ContactNumber { get; set; }

        public virtual CommonTypeReference? Role { get; set; }
        public int? RoleId { get; set; }

        public virtual CommonTypeReference? Department { get; set; }
        public int? DepartmentId { get; set; }

        public virtual User? Manager { get; set; }
        public int? ManagerId { get; set; }


        public string CreatedBy { get; set; }


        public DateTime CreatedDate { get; set; } = DateTime.Now;

        public string? ModifiedBy { get; set; }

        public DateTime? ModifiedDate { get; set;}

        public Boolean IsActive  { get; set; } = true;




    }
}
