﻿
using Microsoft.AspNetCore.Components.Web;

namespace ProjectAPI.Model
{
    public class TransportDetails
    {
        public int  Id { get; set; }

        public Request Request { get; set; }
        public int  RequestId { get; set; }

        public Document Document { get; set; }
        public int DocumentId { get; set; }

        public Boolean ? InternationalTrvel { get; set; }
        public Boolean ? DomesticTravel { get; set; }

        public DateTime TravelDateFrom { get; set; }

        public DateTime TravelDateTo { get; set; }

        public virtual CommonTypeReference? TravelFrom{ get; set; }
        public int TravelFromId { get; set; }
        public CommonTypeReference? TravelTo  { get; set;}
        public int TravelToId { get; set; }

        public string AadharNumber { get; set; }
        public string VisaNumber { get; set; }

        public string PassportNumber { get; set; }


        public string CreatedBy { get; set; }

        public DateTime CreatedDate { get; set; } = DateTime.Now;

        public string? ModifiedBy { get; set; }

        public DateTime? ModifiedDate { get; set; }

        public Boolean IsActive { get; set; } = true;




    }
}
