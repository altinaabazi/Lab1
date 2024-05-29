using System.ComponentModel.DataAnnotations;

namespace Lab1_Backend.Models
{
    public class AssignRoleModel
    {
        [Required]
        public int UserId { get; set; }

        [Required]
        public int RoleId { get; set; }
    }
}
