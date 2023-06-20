from exercicio6 import email_validation
import pytest


def test_username_can_only_contain_letters():
    assert email_validation("aaaa@nomewebsite.ext") is None


def test_username_can_contain_letters_and_digits():
    assert email_validation("a1993@nomewebsite.ext") is None


def test_username_can_contain_letters_digits_and_dashes():
    assert email_validation("aa-a@nomewebsite.ext") is None


def test_username_can_contain_letters_digits_dashes_and_underscores():
    assert email_validation("a_a1a-a@nomewebsite.ext") is None


def test_username_should_starts_with_letter():
    assert email_validation("a@nomewebsite.ext") is None


def test_username_when_doesnt_start_with_letter_raise_exception():
    with pytest.raises(ValueError):
        email_validation("1@nomewebsite.ext")


def test_username_is_invalid_raise_exception():
    with pytest.raises(ValueError):
        email_validation("a%a@nomewebsite.ext")


def test_website_contain_only_letters_and_digits():
    assert email_validation("abc@website123.com") is None


def test_website_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        email_validation("abc@website!123.com")


def test_extension_should_contain_only_three_chars():
    assert email_validation("abc@website123.com") is None


def test_extension_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        email_validation("abc@website123.pyth")



