using Microsoft.EntityFrameworkCore;
using ProjectAPI.Model;
using ProjectAPI.Model;

namespace ProjectAPI.Context
{
    public class NSTDbContext : DbContext
    {

        public NSTDbContext()
        {
            
        }

        public NSTDbContext(DbContextOptions<NSTDbContext> options) : base(options)
        {
        }

        //public DbSet<Booking> Bookings { get; set; }    
        //public DbSet<City> Cities { get; set; } 
        //public DbSet<Comment> Comments { get; set; }    

        //public DbSet<CountryReference> CountryReferences { get; set; }  

        //public DbSet<Department> Departments { get; set; }  

        //public DbSet<CommonTypeReference> MasterDataReferences { get; set; }    

        //public DbSet<Request> Requests { get; set; }    
        //public DbSet<Role> Roles { get; set; }  

        public DbSet<User> Users { get; set; }  
        public DbSet<Project> Projects { get;}
        public DbSet<Request> Requests { get; set; }    
        public DbSet<HotelDetail> HotelDetails { get; set; }    
        public DbSet<Document> Documents { get; set; }  
        public DbSet<CommonTypeReference> CommonTypes { get; set; }

        public DbSet<TransportDetails> TransportDetails { get; set; }   

        public DbSet<Comment> Comments { get; set; }     

        //public DbSet<UserRoleMapping> UserRoleMappings { get; set; }   
    }
}
