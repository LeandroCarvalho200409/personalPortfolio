package pt.leandro.carvalho.personal.portfolio.data

import jakarta.persistence.*

@Entity
@Table(name = "users")
data class UserDbo (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    @Column(name = "name", nullable = false)
    val name: String,

    @Column(nullable = false)
    val email: String
) {

}