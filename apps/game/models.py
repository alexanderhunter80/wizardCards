from django.db import models





class PlayerManager(models.Manager):
    pass

class Player(models.Model):
    name = models.CharField(max_length=31)
    wounds = models.IntegerField()
    objects = PlayerManager()
    pass



class CardManager(models.Model):
    pass

class Card(models.Model):
    objects = CardManager()
    pass



class GameboardManager(models.Model):
    pass

class Gameboard(models.Model):
    objects = GameboardManager()
    pass



class SpellManager(models.Manager):
    pass

class Spell(models.Model):
    knownBy = models.ForeignKey(Player, related_name="spellsKnown", on_delete=models.SET_NULL)
    objects = SpellManager()
    pass





class Bootstrapper(models.Manager):
    def initializeGame(self):
        pass
    pass