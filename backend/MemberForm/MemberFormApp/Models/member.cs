using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

public class member
{
    [Key]
    public long Id { get; set; }
    [Column(TypeName = "nvarchar(50)")]
    public string FirstName { get; set; }

    [Column(TypeName = "nvarchar(50)")]
    public string LastName { get; set; }

    [Column(TypeName = "nvarchar(50)")]
    public string MiddleName { get; set; }
}