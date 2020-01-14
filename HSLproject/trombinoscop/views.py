#!/usr/bin/env python
# -*- coding: utf-8 -*-

# views.py créer les vue pour les renvoier au navigateur à partir des fonctions définit ici

from django.shortcuts import render
from django.http import HttpResponseRedirect

from datetime import date

# Pour la page de connexion

# Pour la page d'accueil
def welcome(request) :

		return render(request, 'welcome.html', {})
