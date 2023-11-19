from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Codes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_account = db.Column(db.String(80), nullable=False)
    model_name = db.Column(db.String(80), unique=True, nullable=False)
    title = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(80), nullable=True)

    def __repr__(self) -> str:
        return 'Codes>>>{self.user_account}'